import React, { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCheck, faPencil, faUpload } from '@fortawesome/free-solid-svg-icons';


const UploadForm = () => {  
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <Form>
        {/* <Form.Group className="">    
        <div className="profilepic" id='profilepic'>
          <Image src="assets/images/profile.svg" alt="icon" width={20} height={20}/>
          <Form.Control type="file" id='profileimg'/>
        </div>  
        </Form.Group> */}
         <Form.Group id="formFile" className="">
          <span className='closeicon' id='closeicon'>
            <FontAwesomeIcon icon={faClose} />
          </span>
          <div className="profilepic" id='profilepic'>
            <Image src="assets/images/profile.svg" alt="icon" width={20} height={20} />
            <Form.Label className="prediticon">
              <span className="pfup">
                <FontAwesomeIcon icon={faPencil} id='editicon' style={{ display: showIcons ? 'none' : 'inline' }} />
                <FontAwesomeIcon icon={faCheck} id='checkicon' style={{ display: showIcons ? 'inline' : 'none' }} />
              </span>
              <Form.Control type="file" id='profileimg' />
            </Form.Label>
          </div>
        </Form.Group>
      </Form>
    </>
  );

};

export default UploadForm;
