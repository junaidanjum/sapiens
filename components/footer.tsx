import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-2 dark:border-border md:px-8 md:py-0 mt-10">
      <div className="container flex flex-col items-center justify-center gap-2 md:h-12 md:flex-row">
        <p className="text-balance text-center text-sm font-normal leading-loose text-muted-foreground md:text-left">
          A small effort by{" "}
          <Link
            href="https://junaidanjum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Junaid A.
          </Link>
        </p>
        <p className="text-balance text-center text-sm font-normal leading-loose text-muted-foreground md:text-left">
          If you have any suggestions or feedback, please contact me at{" "}
          <Link
            href="mailto:hello@junaidanjum.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            hello@junaidanjum.in
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
