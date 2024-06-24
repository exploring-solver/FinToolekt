import React from 'react';

const Help = () => {
    return (
        <div className='w-[90%] mx-auto pt-10'>
            <h1 className='text-xl underline mb-4'>About</h1>
            <h2 className='text-lg font-semibold mb-2'>HumanAlze FinTech Hackathon</h2>
            <p className='mb-4'>
                <strong>Team Name:</strong> DhanSaavy<br />
                <strong>Team Members:</strong> Aman Sharma, Kiriti Nain
            </p>

            <h2 className='text-lg font-semibold mb-2'>Motivation</h2>
            <p className='mb-4'>
                When I first asked my father about his experiences with financial fraud, I was surprised by his open response. He gave examples of encountering fraudulent activity during his career, emphasizing the destructive impact these instances had on individuals and organizations alike. Motivated by his experiences and realizing the critical need for robust solutions, I set out to create a comprehensive fraud detection system.
            </p>
            <p className='mb-4'>
                Similarly, my teammate Aman noticed the shortcoming businesses faced in management. He saw the gap of not having helpful auditing tools in the marketplace, which convinced us to combine both aspects and come up with a solution.
            </p>
            <p className='mb-4'>
                This ambition inspired us to join the HumanAlze FinTech Hackathon. Together, we aimed to bring our vision to life with our solution “FinToolekt” and contribute to a more secure financial ecosystem.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Project Synopsis</h2>
            <p className='mb-4'>
                We intend to create a solution for fraud detection and auditing designed to help large firms handle their data efficiently. Our technology uses advanced AI algorithms and Generative AI (GenAI) to scan large datasets and detect trends and anomalies indicating fraudulent activity. Additionally, we offer an audit assistant tool for data cleaning and sampling of data sheets and excel reports for analyzing financial and operational losses. By combining machine learning and GenAI, we provide real-time insights and automated auditing processes, significantly reducing the time and effort necessary for manual checks.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Unique Value Proposition</h2>
            <p className='mb-4'>
                Our solution stands out by integrating fraud detection and auditing tools within a single platform. Currently, there are no comprehensive tools available that specifically aid in the auditing process while simultaneously detecting fraudulent activities. Our platform fills this gap by providing a dual-functionality solution, enabling companies to identify fraud and conduct thorough audits with ease.
            </p>
            <p className='mb-4'>
                By integrating these critical functions, we offer a more holistic approach to managing financial data and ensuring integrity within large organizations. This new approach not only improves fraud detection accuracy but also enables organizations to better protect their financial assets and enhances overall security, making our platform a leading tool in the financial technology landscape.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Market Impact</h2>
            <p className='mb-4'>
                The global auditing services market is estimated to be worth USD 277.2 billion by 2029, up from USD 226.6 billion in 2024, growing at a CAGR of 4.11% from 2024 to 2029. This significant growth underscores the increasing demand for advanced auditing and fraud detection solutions. By combining AI-driven fraud detection with robust auditing tools, our platform is poised to make a substantial impact in this ever-growing market.
            </p>
            <p className='mb-4'>
                Our solution is designed for financial institutions, auditors, and large enterprises that handle extensive transaction data. By implementing our machine learning (ML) model, these organizations can effectively detect and prevent fraud. The model analyzes transaction patterns to identify anomalies and suspicious activities, which is particularly crucial given regulations such as India's Section 269ST, limiting cash transactions to Rs 2 Lakh per day.
            </p>
            <p className='mb-4'>
                This proactive approach helps maintain the integrity of financial operations, ensuring secure and transparent auditing processes. Our solution is especially beneficial for organizations aiming to enhance their fraud detection capabilities and streamline audit procedures, ultimately safeguarding against financial and operational losses.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Technological Integration</h2>
            <p className='mb-4'>
                For fraud detection, we employ advanced machine learning algorithms such as decision trees and random forests to analyze transaction patterns and identify anomalies with high accuracy. The website is built using modern web development technologies including React.js and Node.js, along with JavaScript, ensuring a responsive and user-friendly interface. We have also integrated robust auditing tools to facilitate thorough and efficient auditing processes.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Future Aspects</h2>
            <p className='mb-4'>
                We plan to extend our solution for different web browsers, making it easily accessible through browser add-ons in the future. This will enhance the efficiency and scalability of our solution, making it ready for use whenever needed.
            </p>

            <h2 className='text-lg font-semibold mb-2'>Hands-on Experience</h2>
            <p className='mb-4'>
                To have hands-on experience with the solution, please visit the following links:
                <ul className='list-disc list-inside mb-4'>
                    <li><a href="https://fintoolekt.netlify.app/" className='text-blue-500 underline'>Website</a></li>
                    <li><a href="https://colab.research.google.com/drive/1xfyF1k1PaAcEBpdH9x5MsD8808Bm3PNZ?usp=sharing" className='text-blue-500 underline'>ML Colab Notebook</a></li>
                </ul>
            </p>

            <h2 className='text-lg font-semibold mb-2'>Acknowledgements</h2>
            <p className='mb-4'>
                We extend our heartfelt thanks to Hack2Skill for organizing the HumanAlze FinTech Hackathon. This incredible event provided us with a platform to innovate and showcase our AI-powered solution for fraud detection and auditing in the fintech space. The support and resources offered by Hack2Skill have been invaluable in helping us turn our vision into reality. We are excited to continue developing our solution and contributing to the advancement of financial technology. Thank you for fostering an environment that encourages creativity, collaboration, and technological progress.
            </p>
        </div>
    );
}

export default Help;
