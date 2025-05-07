# Reset-Projeto.ps1
# ⚠️ Execute na raiz do projeto (ex: D:\lfairporttransfers)

Write-Host "🧹 Limpando projeto padrão do Next.js + Tailwind..." -ForegroundColor Cyan

# Remover arquivos da pasta app/
$arquivosApp = @(
    "src\app\page.tsx",
    "src\app\layout.tsx",
    "src\app\favicon.ico",
    "src\app\globals.css"
)

foreach ($arquivo in $arquivosApp) {
    if (Test-Path $arquivo) {
        Remove-Item $arquivo -Force
        Write-Host "🗑️ Removido: $arquivo"
    }
}

# Remover a pasta 'public' (exceto se quiser mantê-la para imagens)
$publicFolder = "public"
if (Test-Path $publicFolder) {
    Remove-Item "$publicFolder\*" -Recurse -Force
    Write-Host "🧼 Pasta public/ limpa"
}

# Recriar arquivos mínimos para reinício
New-Item -ItemType File -Path "src\app\layout.tsx" -Force | Out-Null
New-Item -ItemType File -Path "src\app\page.tsx" -Force | Out-Null
New-Item -ItemType File -Path "src\styles\globals.css" -Force | Out-Null

Write-Host "`n✅ Projeto limpo e pronto para começar do zero!" -ForegroundColor Green
