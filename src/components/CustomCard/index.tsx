import { Card } from "antd";
import { LinkOutlined, YoutubeOutlined } from '@ant-design/icons';
import { CustomCol } from "./styles";
const { Meta } = Card;
interface CardProps { imagePath: string, SocialLink: string, openVid: any, setVideo: any, setOpen: any, videoId: string, title: string, description: string };

const CustomCard = ({ imagePath, SocialLink, openVid, setVideo, setOpen, videoId, title, description }: CardProps) => (
    <CustomCol>
        <Card
            hoverable
            style={{ width: 300, height: 623}}
            cover={
                <img
                    alt="example"
                    src={imagePath}
                    height="300"
                    style={{objectFit: 'cover'}}
                />
            }
            actions={[
                <LinkOutlined onClick={() => window.open(SocialLink, "_blank")} />,
                <YoutubeOutlined onClick={() => openVid(setVideo, videoId, setOpen)} />,
            ]}
        >
            <Meta
                title={title}
                description={description}
                style={{height: 231}}
            />
        </Card>
    </CustomCol>
);

export default CustomCard;