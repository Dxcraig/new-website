import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import PageTitle from "./../../components/common/PageTitle";
import Divider from "./../../components/common/Divider";
import { technologies } from "./../../utils/tech";
import { colors } from "../../styles/colors";
import profile from "../../assets/profile/Image-1.jpeg";
import { motion } from "framer-motion";

const About = ({ language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout id="about">
      {desktop && (
        <RightSide>
          <RightSideContent>
            <img src={profile} alt="Magdalene Matey" />
          </RightSideContent>
        </RightSide>
      )}

      <LeftSide>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTitle>{texts[language].about.title}</PageTitle>
        </motion.div>
        <Divider width={"30%"} />

        <p>
          {texts[language].about.text}
        </p>

        <p style={{ marginTop: "1rem" }}>
          {texts[language].about.text2}
        </p>

        <p style={{ marginTop: "1rem" }}>
          {texts[language].about.techIntro}
        </p>

        <Row
          justify="flex-start"
          style={{
            margin: "1.5rem 0",
          }}
        >
          {technologies.map((tech, index) => (
            <Row key={index} width="max-content">
              <span
                style={{
                  color: colors.purple,
                }}
              >
                &#10148;
              </span>
              <p>{tech}</p>
            </Row>
          ))}
        </Row>

        <p style={{ marginTop: "1rem" }}>{texts[language].about.text3}</p>

        {/* Pitch Video Placeholder */}
        <div
          style={{
            marginTop: "2rem",
            padding: "2rem",
            border: "2px dashed #ccc",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            🎥
          </div>
          <h3
            style={{
              margin: "0 0 0.5rem 0",
              color: "#666",
              fontSize: "1.2rem",
            }}
          >
            {language === "en" ? "Pitch Video" : "Vídeo de Apresentação"}
          </h3>
          <p
            style={{
              margin: "0",
              color: "#888",
              fontSize: "0.9rem",
            }}
          >
            {language === "en" 
              ? "Coming soon - A personal introduction video showcasing my journey and aspirations"
              : "Em breve - Um vídeo de apresentação pessoal mostrando minha jornada e aspirações"
            }
          </p>
        </div>
      </LeftSide>
    </SceneLayout>
  );
};

export default About;
