const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-2 dark:border-border md:px-8 md:py-0 mt-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <p className="text-balance text-center text-sm font-normal leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://junaidanjum.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Junaid A
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
