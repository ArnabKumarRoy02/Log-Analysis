import { Button } from "@mui/material";
import React, { useState } from "react";
import Popup from "./Popup";

export default function Form(){

    const [open,setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [resp, setResp] = useState();

   const  handleClickOpen = () => {
        setOpen(()=>true);
    };

    const handleClose = () => {
        setOpen(()=>false);
    };

    const changeHandler = (event) => {
        console.log("this is here");
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const  handleUploadImage= (ev) => {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', selectedFile);

        console.log(selectedFile);

        
        data.append('filename',selectedFile?.name);

        handleClickOpen();

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then(data => {
                setResp(()=>data);
                console.log(data)
            })
        });
    }

    return (
        <>
            <form onSubmit={handleUploadImage}>
                <div>
                    <input
                        style={{
                            width: "100%"
                        }}
                        onChange={changeHandler}
                        type="file" />
                </div>

                <br />
                <div>
                    <Button
                        className="form__run"
                        sx={{
                            background: "#0dfd55"

                        }}
                        variant="contained"
                      onClick={handleUploadImage}
                        
                    >Run</Button>

                </div>

            </form>
            <Popup handleClose={handleClose} open={open}  resp={resp}/>
        </>
    );

}