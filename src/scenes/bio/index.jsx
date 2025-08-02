import {
  SceneLayout,
  Column,
} from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import PageTitle from "./../../components/common/PageTitle";
import Divider from "../../components/common/Divider";
import { motion } from "framer-motion";

const Bio = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout 
      id="bio"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Column width={desktop ? "70%" : "90%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <PageTitle style={{ textAlign: "center" }}>
            {texts[language].bio.title}
          </PageTitle>
          <Divider width={"30%"} style={{ margin: "0 auto" }} />
        </motion.div>

        <div style={{ marginTop: "2rem" }}>
          <p style={{ marginBottom: "1.5rem", textAlign: "justify" }}>
            {texts[language].bio.text}
          </p>

          <p style={{ marginBottom: "1.5rem", textAlign: "justify" }}>
            {texts[language].bio.text2}
          </p>

          <p style={{ textAlign: "justify" }}>
            {texts[language].bio.text3}
          </p>
        </div>
      </Column>
    </SceneLayout>
  );
};

export default Bio;
