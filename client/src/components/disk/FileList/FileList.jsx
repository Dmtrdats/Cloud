import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import File from './File/File'
import './filelist.css'

const FileList = () => {
    const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
    

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;