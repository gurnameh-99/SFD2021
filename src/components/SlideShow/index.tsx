import { Carousel } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

const contentStyle = {
    height: '100%',
    width: '100%',
    background: '#364d79',
    ObjectFit: 'cover'
};

interface SlideShowProps {
    images: any;
}

const SlideShow = ({ images }: SlideShowProps) => (
        <Carousel arrows nextArrow={<RightCircleOutlined />} prevArrow={<LeftCircleOutlined />} effect="fade" dots>
            {images.map((image: any, index: number) => (
                <div key={index} >
                    <img src={image.src} alt={image.alt} style={contentStyle} />
                </div>
            ))}
        </Carousel>
);

export default SlideShow;