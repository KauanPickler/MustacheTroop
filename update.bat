@echo off
echo.
echo 🚀 Atualizando o site...
echo ----------------------------

echo ✅ Adicionando alterações...
git add .

echo 📝 Digite a mensagem do commit:
set /p msg="Mensagem: "
git commit -m "%msg%"

echo 🔼 Enviando para o GitHub...
git push

echo 🏗️  Gerando build...
npm run build

echo 🌐 Publicando no GitHub Pages...
npm run deploy

echo 🟢 Site atualizado com sucesso!
pause