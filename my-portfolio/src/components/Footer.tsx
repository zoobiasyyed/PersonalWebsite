export default function Footer() {
  return (
    <footer className="text-center py-4 border-t mt-8 text-sm text-gray-500">
      <p>© 2025 Zoobia Syyed. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:your@email.com">Contact</a>
      </div>
    </footer>
  );
}
