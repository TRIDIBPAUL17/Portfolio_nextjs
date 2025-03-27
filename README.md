Steps to Run  Portfolio Next.js Project Locally:-

git clone https://github.com/TRIDIBPAUL17/Portfolio_nextjs.git

Step 2: Navigate to the Project Directory
Change into the project directory:

cd Portfolio_nextjs

Step 3: Install Dependencies
Install the required dependencies using npm:

npm install

Step 4: Set Up Environment Variables
Create a new file named .env.local in the root directory and add the required EmailJS credentials:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key


Replace your_service_id, your_template_id, and your_public_key with your actual EmailJS credentials.

Step 5: Start the Development Server
Start the development server using npm:

npm run dev


Step 6: Open the Application
Open a web browser and navigate to:

http://localhost:3000

Step 7: Verify the Contact Form 
Ensure you have configured EmailJS correctly. Test sending a message from the contact form to verify its functionality.
