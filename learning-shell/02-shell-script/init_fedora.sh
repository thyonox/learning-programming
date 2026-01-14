#!/usr/bin/env bash

# 脚本作用: 初始化 Fedora 系统，安装必要的软件包和配置环境
# 脚本示例: ./init_fedora.sh

# 检查是否是 root 用户

# 更新系统与软件
echo "[1/100] 更新系统与软件..."
dnf upgrade --refresh -y
echo "✓ 系统更新完成!"

# 启用 RPM Fusion 仓库
echo "[2/100] 安装 RPM Fusino 仓库..."
dnf install -y \
	https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
	https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
echo "✓ RPM Fusion 仓库安装完成!"

# 添加 Flatpak 远程仓库
echo "[3/100] 配置 Flathub 仓库..."
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
echo "✓ Flathub 仓库配置完成!"

# 安装 Extension Manager 
echo "[4/100] 安装 Extension Manager..."
flatpak install flathub com.mattjakeman.ExtensionManager
echo "✓ Extension Manager 安装完成!"

# 安装 Gnome Tweaks
echo "[5/100] 安装 gnome-tweaks..."
sudo dnf install gnome-tweaks
echo "✓ gnome-tweaks 安装完成!"

# 安装中文字体
dnf install wqy-zenhei-fonts
dnf install google-noto-fonts-common

# 安装 chrome
if ! dnf install google-chrome-stable; then
    echo "正在启用 chrome 仓库..."
    dnf config-manager setopt google-chrome.enabled=1
    if ! dnf install fedora-workstation-repositories; then
        echo "chrome 安装失败!"
    fi
fi

# 安装 vscode
rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
dnf check-update
dnf install code

# 安装 cursor

# 安装 idea

# 安装 datagrip

# 安装 aipifox

#安装 telegram

# 安装微信开发者工具

# 安装 steam

# 安装 nodejs

# 配置 git

# 安装 java

# 安装 maven

# 安装 mysql

# 安装 fish shell

# 安装 AppIndicator and KStatusNotifierItem Support

# 安装 ArcMenu

# 安装 Blur my shell

# 安装 Clipboard History

# 安装 Compiz alike magic lamp effct

# 安装 Compiz windows effect

# 安装 Dash to dock

# 安装 Open Bar 并关闭启用

# 安装 Search light

# 安装 User Themes

# 安装 Vitals

# 安装 Nvidia 驱动

# 安装视频解码工具

# 提示输出