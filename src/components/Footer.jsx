import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-bold text-xl mb-2">FetchTrue</h2>
          <p>© {new Date().getFullYear()} FetchTrue. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Franchise</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
