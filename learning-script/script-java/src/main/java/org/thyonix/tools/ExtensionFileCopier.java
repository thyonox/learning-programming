package org.thyonix.tools;

import java.io.*;
import java.nio.file.Path;
import java.util.HashSet;
import java.util.Set;

/**
 * 在源文件夹内查找指定后缀名的文件，并将其拷贝到输出文件夹
 */
public class ExtensionFileCopier {
    public static void copyFilesByExtension (String source, String target, String extension) throws IOException {
        File sourceFile = new File(source);
        File targetFile = new File(target);

        if (!sourceFile.exists() || !sourceFile.isDirectory()){
            System.out.println("source 不存在，或者是一个文件");
            return;
        }

        if (!targetFile.exists()){
            System.out.println("Target 不存在，将创建该文件夹");
            targetFile.mkdirs();
        }


        Set<File> files = findFiles(sourceFile);
        if (!files.isEmpty()){
            for (File file : files){
                if (!file.canRead()){
                    System.out.println("文件需要可读权限，请使用管理员模式运行");
                    continue;
                }
                BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
                BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(new FileOutputStream(targetFile));
                int len;
                while((len = bufferedInputStream.read()) != -1){
                    bufferedOutputStream.write(len);
                }
            }
        }


    }

    public static Set<File> findFiles(File sourceFile){
        if (sourceFile == null || !sourceFile.exists() || !sourceFile.isDirectory()){
            return null;
        }

        Set<String> suffix = Set.of("pdf", "epub");

        File[] files = sourceFile.listFiles();
        Set<File> fileSet = new HashSet<>();
        if (files != null) {
            for (File file : files){
                if (file.isDirectory()){
                    findFiles(file);
                }
                if (suffix.contains(file.getName().split("\\.")[1])){
                    fileSet.add(file);
                }
            }
        }
        return fileSet;
    }

    public static void main(String[] args) throws IOException {
        copyFilesByExtension("E:\\Documents\\NeatReader\\67eae759-c12d-4d84-a3f0-e9ae725d0345","E:\\Downloads\\t","pdf");
    }
}
