import React from 'react';
import Spinner from './Spinner';
import Images from './Images';
import Buttons from './Buttons';

class ImageUploader extends React.Component {
    state = {
        uploading: false
    }

    onChange = async (e) => {
        const files = Array.from(e.target.files);
        this.setState({ uploading: true })

        const images = await Promise.all(files.map( async (file) => {
            const formData = new FormData();
            formData.append('upload_preset', 'default-preset')
            formData.append('file', file);
            const response = await fetch(`https://api.cloudinary.com/v1_1/dsdeorvu4/image/upload`, {
                method: 'POST',
                body: formData
            });
            const json = await response.json();
            return json.url;
        }  ))
        

        this.setState({
            uploading: false
        })
        // update images in the parent component (PostCreate.js)
        this.props.updateImages(this.props.imageUrl.concat(images))
    }

    removeImage = id => {
        this.props.updateImages(this.props.imageUrl.filter(image => image !== id))
    }

    render() {
        const { uploading } = this.state

        const content = () => {
            switch (true) {
                case uploading:
                    return <Spinner />
                default:
                    return (
                        <div>
                            <Buttons onChange={this.onChange} />
                            <Images images={this.props.imageUrl} removeImage={this.removeImage} />
                        </div>
                    )
            }
        }

        return (
            <div>
                <div className='buttons'>
                    {content()}
                </div>
            </div>
        )
    }
}

export default ImageUploader;