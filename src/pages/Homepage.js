import coverPhoto from "../templates/images/coverPhoto.jpg";
import AppHeader from "../templates/Appheader";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
function Homepage() {
    
    return (
        <div style={{ position: 'relative', width: '100%', height: '700px' }}>
            <AppHeader/>
            <Image src={coverPhoto} style={{ width: '100%', height: '100%'}}/>
        </div>
    )
}

export default Homepage;
