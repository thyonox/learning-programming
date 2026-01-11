package org.thyonix.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.springframework.web.bind.annotation.RequestMethod.OPTIONS;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
// 控制其级别的跨域同源策略
@CrossOrigin(origins = "http://127.0.0.1:5500", methods = {POST, OPTIONS}, allowCredentials = "true")
public class FileUploadController {
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // 获取文件名
            String fileName = file.getOriginalFilename();
            // 定义存储路径（这里存储在项目根目录下的uploads文件夹）
            Path path = Paths.get("uploads/" + fileName);
            // 确保目录存在
            Files.createDirectories(path.getParent());
            // 保存文件
            Files.write(path, file.getBytes());
            return ResponseEntity.ok("File uploaded successfully: " + fileName);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
        }
    }
}
