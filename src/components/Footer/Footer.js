import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Footer.module.css";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `nosotros`, path: `/#nosotros` },
  { title: `productos`, path: `/products` },
  { title: `faq`, path: `/#faq` },
  { title: `contacto`, path: `/#contacto` },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={styles.footer}>
      <div className={styles.footerBody}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
              Droquinac
          </div>
        </div>
        <div className={styles.footerSection}></div>
        <div className={styles.footerSection}></div>
        <div className={styles.footerSection}></div>
        <div className={styles.footerSection}></div>
      </div>
      <div className={styles.footerSign}>
        {new Date().getFullYear()} ©{" "}
        <a href="https://vortex.ar" target="_blank" rel="noreferrer">
          Vortex
        </a>{" "}
        - Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
