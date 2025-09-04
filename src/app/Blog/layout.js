// app/blog/layout.js
export const metadata = {
  title: "Blog - Fetch True",
  description: "Read our latest articles and insights.",
};

export default function BlogLayout({ children }) {
  return (
    <div>
      {/* 🚀 Yahan intentionally Navbar/Footer skip kar diya */}
      {children}
    </div>
  );
}
