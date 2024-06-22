const express = require('express');
const multer = require('multer');
const { PythonShell } = require('python-shell');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(cors()); // Enable CORS
app.use(express.static('public'));
app.use('/processed', express.static(path.join(__dirname, 'processed')));

app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    const uniqueId = uuidv4();
    const logFilePath = `progress_${uniqueId}.log`;

    // Ensure the 'processed' directory exists
    const processedDir = path.join(__dirname, 'processed');
    if (!fs.existsSync(processedDir)) {
        fs.mkdirSync(processedDir);
    }

    // Run the Python script
    let options = {
        args: [filePath, uniqueId, logFilePath]
    };

    PythonShell.run('scripts/audit.py', options, (err, results) => {
        if (err) {
            console.error('Error running Python script:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const cleanedFilePath = results[0].trim();
        const vendorFilePath = results[1].trim();

        console.log('Processing completed. Cleaned file path:', cleanedFilePath);
        console.log('Vendor file path:', vendorFilePath);

        // Cleanup uploaded file
        fs.unlinkSync(filePath);
    });

    res.status(200).json({
        cleanedFilePath: `${uniqueId}_cleaned_excel_file.xlsx`,
        vendorFilePath: `${uniqueId}_cleaned_vendor_master.xlsx`
    });
});

app.get('/progress/:uniqueId', (req, res) => {
    const logFilePath = `progress_${req.params.uniqueId}.log`;
    fs.readFile(logFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.json({ progress: [] });
        }
        const progress = data.split('\n').filter(line => line.trim() !== '');
        res.json({ progress });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
