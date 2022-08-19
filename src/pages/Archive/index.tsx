import { Row } from "antd";
import { lazy, useState } from "react";
import ModalVideo from "react-modal-video";
import ArchiveContent from "../../content/ArchiveContent.json";
import CustomCard from "../../components/CustomCard";
import { CustomRow } from "./styles";

const Container = lazy(() => import("../../common/Container"));

const openVid = (setVideo: any, video: string, setOpen: any) => {
  setVideo(video);
  setOpen(true);
};

const Archive = () => {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState(null);
  return (
    <>
      <Container>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={video}
          onClose={() => setOpen(false)}
        />
        <Row justify="center" style={{ paddingBlockEnd: "2em" }}>
          <h6>Our Past Speakers</h6>
        </Row>

        {ArchiveContent.map((speakers, id) => {
          return (
            <CustomRow justify="space-between" id={`${id}`}>
              {speakers.map((speaker, id) => {
                return (
                  <CustomCard
                    imagePath={speaker.img}
                    SocialLink={speaker.link}
                    openVid={openVid}
                    setVideo={setVideo}
                    setOpen={setOpen}
                    videoId={`${speaker.id}`}
                    title={speaker.name}
                    description={speaker.desc}
                  />
                );
              })}
            </CustomRow>
          );
        })}

        <CustomRow justify="space-between">
          <CustomCard
            imagePath="/img/archive/Joe Davison.jpg"
            SocialLink="https://twitter.com/joeddav"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="Y4aPrBXKwfg"
            title="Joe Davison"
            description="Joe Davison is currently a Research Engineer at Hugging Face. He is Edwin S. Hinckley Scholar and a Crocker Innovation Fellow. A graduate from Harvard University , he helps computers understand natural language by advanced research in ML and NLP and by deploying powerful open source tools"
          />
          <CustomCard
            imagePath="/img/archive/Michael Grey.jpg"
            SocialLink="https://greyxmike.info/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="U2sTnab00bA"
            title="Dr. Michael Grey"
            description="Dr. Michael Grey is an Open Source Software Developer and a Robotics Researcher. He currently works as a Senior Software Engineer at Open Robotics, Singapore. He has contributed to the field of Robotics through his research publications. He is a proud volunteer of the 'Code in the Community program' in Singapore."
          />
          <CustomCard
            imagePath="/img/archive/Saloni Garg.jpeg"
            SocialLink="https://www.linkedin.com/in/saloni-garg/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="R4UfPUHVAgE"
            title="Saloni Garg"
            description="Saloni is currently working in the Linux Foundation and she is actively involved in open source community . she is a Mozilla open leader , Google Venkat Scholar and International Women in the Open Source."
          />
        </CustomRow>
        <CustomRow justify="space-between">
          <CustomCard
            imagePath="/img/archive/Jivitesh Dhaliwal.png"
            SocialLink="https://www.linkedin.com/in/jiviteshdhaliwal/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="N4oWAwzd4Js"
            title="Jivitesh Dhaliwal"
            description="Jivitesh is currently a game developer at Tender Claws. He is a IGDA Scholar '20 and Eric Dybsand Memorial AI scholar.He has been a part of award winning games and interactive media experiences including 'The Under Presents' , 'Phenomenology' and 'Walden, a game' to name a few."
          />
          <CustomCard
            imagePath="/img/archive/Mihaels Ghidersa.jpg"
            SocialLink="https://www.linkedin.com/in/ghidersam/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId=""
            title="Mihaela Ghidersa"
            description="Mihaela - Roxana is a software developer at Centric IT Solutions, Romania. Passionate for technology , she is an innovative individual and can go extra mile to build and deliver amazing softwares. She is an IT Manager for Girls Who Code- Iasi and a powerful orator."
          />
          <CustomCard
            imagePath="/img/archive/Dhairya Gandhi.jpg"
            SocialLink="https://github.com/DhairyaLGandhi"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="Fv1DcOTA3Zg"
            title="Dhairya Gandhi"
            description="Dhairya is currently a Data Scientist at Julia Computing Inc. and maintains and develops Julia's Machine Learning stack with Flux and Zygote."
          />
        </CustomRow>
        <CustomRow justify="space-between">
          <CustomCard
            imagePath="/img/archive/Aravind Putrevu.png"
            SocialLink="https://www.linkedin.com/in/aravindputrevu/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="QhUYQBBLJno"
            title="Aravind Putrevu"
            description="Aravind is currently a Senior Developer Advocate at Elastic. A FOSS Enthusiast, he is passionate about evangelizing tech, meeting developers and helping in solving their problems. He also runs a youtube channel 'Code-Build-Hack'."
          />
          <CustomCard
            imagePath="/img/archive/Vaibhav Gupta.jpg"
            SocialLink="https://www.linkedin.com/in/varodek/"
            openVid={openVid}
            setVideo={setVideo}
            setOpen={setOpen}
            videoId="MAxzhurvDTw"
            title="Vaibhav Gupta"
            description="Vaibhav Gupta is passionate about Kernel, Bootloader, Firmware, and hardware. He recently completed his Linux Kernel mentorship project with The Linux Foundation. He completed his GSOC project with RTEMS in 2019 and also mentored the project in 2020."
          />
        </CustomRow>
      </Container>
    </>
  );
};

export default Archive;
