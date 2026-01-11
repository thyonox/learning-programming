const fileBrowseButton = document.querySelector('.file-browse-button');
const fileBrowseInput = document.querySelector('.file-browse-input');
const fileUploadBox = document.querySelector('.file-upload-box');
const fileList = document.querySelector('.file-list');
const fileCompletedStatus = document.querySelector('.file-completed-status');

// 初始化文件上传总数
let totalFiles = 0;
// 初始化文件上传完成数
let completedFiles = 0;

// 将按钮的点击事件与文件上传输入框的点击事件绑定
fileBrowseButton.addEventListener('click', () => fileBrowseInput.click());

// 监听文件上传输入框的变化事件
fileBrowseInput.addEventListener('change', (event) => handleSelectedFiles(event.target.files));

// 监听文件上传区域的拖动事件
fileUploadBox.addEventListener('dragover', (event) => {
    event.preventDefault();
    fileUploadBox.classList.add('active');
    fileUploadBox.querySelector('.file-instruction').innerText = 'Release to Upload File or';
})

// 监听文件上传区域的拖离事件
fileUploadBox.addEventListener('dragleave', (event) => {
    event.preventDefault();
    fileUploadBox.classList.remove('active');
    fileUploadBox.querySelector('.file-instruction').innerText = 'Drag files here or';
})

// 监听文件上传区域的释放拖动事件
fileUploadBox.addEventListener('drop', (event) => {
    event.preventDefault();
    handleSelectedFiles(event.dataTransfer.files);
    fileUploadBox.classList.remove('active');
    fileUploadBox.querySelector('.file-instruction').innerText = 'Drag files here or';
})

// 处理文件选择的函数
const handleSelectedFiles = ([...files]) => {
    // 如果没有选择文件，则返回
    if (files.length === 0) return;

    totalFiles += files.length;

    files.forEach((file, index) => {
        // 生成唯一标识符
        const uniqueIdentifier = Date.now() + index;
        // 生成文件项的 HTML
        const fileItemHTML = createFileItemHTML(file, uniqueIdentifier);
        // 将文件项插入到文件列表中
        fileList.insertAdjacentHTML('afterbegin', fileItemHTML);
        const currentFileItem = document.querySelector(`#file-item-${uniqueIdentifier}`);
        const cancleFileUploadButton = currentFileItem.querySelector('.cancel-button');

        const xhr = handleFileUploading(file, uniqueIdentifier);

        // 监听文件上传状态变化事件
        xhr.addEventListener('readystatechange', () => {
            // 文件上传完成后，更新文件状态
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                completedFiles++;
                currentFileItem.querySelector('.file-status').innerText = 'Completed';
                currentFileItem.querySelector('.file-status').style.color = '#00B125';
                cancleFileUploadButton.remove();
                fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} Files Completed`;
            }
        });

        // 监听取消按钮的点击事件
        cancleFileUploadButton.addEventListener('click', () => {
            xhr.abort(); 
            currentFileItem.querySelector('.file-status').innerText = 'Cancelled';
            currentFileItem.querySelector('.file-status').style.color = '#E3413F';
            cancleFileUploadButton.remove();
        });

        // 监听上传错误事件
        xhr.addEventListener('error', () => {
            alert('Error uploading file. Please try again.');
        })
    });

    // 选择文件之后立即更新文件数量
    fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} Files Completed`;
}

// 创建文件项的 HTML
const createFileItemHTML = (file, uniqueIdentifier) => {
    // Extracting file name , size and extension
    const {name} = file;
    const extension = name.split('.').pop();

    // Generating HTML for file item
    return `<li class="file-item" id="file-item-${uniqueIdentifier}">
                <div class="file-extension">${extension}</div>
                <div class="file-content-wrapper">
                    <div class="file-content">

                        <!-- File upload details -->
                        <div class="file-details">
                            <h5 class="file-name">${name}</h5>
                            <div class="file-info">
                                <small class="file-size"></small>
                                <small class="file-divider">·</small>
                                <small class="file-status">Uploading</small>
                            </div>
                        </div>

                        <!-- Upload cancel button -->
                        <button class="cancel-button">
                            <i class='bx bx-x'></i>
                        </button>
                    </div>

                    <!-- Progress bar for file upload -->
                    <div class="file-progress-bar">
                        <div class="file-progress"></div>
                    </div>
                </div>
            </li>`;
}

// 处理文件上传的函数
const handleFileUploading = (file, uniqueIdentifier) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('file', file);

    // 添加进度事件监听器以跟踪上传进度
    xhr.upload.addEventListener('progress', (event) => {
        // Updating progress bar and file size element
        const fileProgress = document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`);
        const fileSize = document.querySelector(`#file-item-${uniqueIdentifier} .file-size`);

        const formattedFileSize = file.size >= 1024 * 1024 ? `${(event.loaded / (1024 * 1024)).toFixed(2)} MB / ${(event.total / (1024 * 1024)).toFixed(2)} MB` : `${(event.loaded / 1024).toFixed(2)} KB / ${(event.total / 1024).toFixed(2)} KB`;

        const progress = Math.round((event.loaded / event.total) * 100); 
        fileProgress.style.width = `${progress}%`;
        fileSize.innerText = formattedFileSize;
    })
    
    // 设置请求头和请求方法
    xhr.open('POST', 'http://127.0.0.1:8080/upload', true);
    xhr.send(formData);

    return xhr;
}