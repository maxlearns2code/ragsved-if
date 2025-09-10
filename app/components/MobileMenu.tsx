import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";
import AppNav from "./AppNav";

const navAndIconVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

interface MobileMenuProps {
  setIsMenuOpen: (open: boolean) => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  const tFooter = useTranslations("Footer");

  return (
    <motion.div
      className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center"
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        closed: { opacity: 0, x: "-100%" },
        open: { opacity: 1, x: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col items-center justify-center gap-8 ">
        <motion.div
          variants={navAndIconVariants}
          initial="initial"
          animate="animate"
          transition={{ type: "spring", stiffness: 80, damping: 14, duration: 2 }}

        >
          <AppNav className="flex flex-col w-72" tNamespace="Header" />
        </motion.div>
        <motion.div
          variants={navAndIconVariants}
          initial="initial"
          animate="animate"
          transition={{ type: "spring", stiffness: 80, damping: 14, duration: 2 }}

        >
          <a
            href="https://www.instagram.com/ragsvedsifvolleyboll/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tFooter("social.instagramAriaLabel")}
            className="text-4xl hover:text-secondary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default MobileMenu;
