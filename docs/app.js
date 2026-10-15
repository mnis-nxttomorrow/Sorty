/* SORTY web — único lugar de configuración + i18n ES/EN. Sin dependencias. */
"use strict";

/* ===== CONFIGURACIÓN: completar con los datos reales del repositorio =====
   1. Crea el repositorio "sorty" en GitHub con tu usuario.
   2. Publica el .exe en Releases con el nombre exacto de EXE_NAME.
   3. Escribe tu usuario en OWNER y la URL del código en SOURCE_URL. */
const CONFIG = {
  OWNER: "mnis-nxttomorrow",    // usuario real de GitHub
  REPO: "Sorty",
  EXE_NAME: "Sorty.exe",        // nombre exacto del archivo en el Release
  VERSION: "1.1.0",             // versión real publicada
  SIZE_MB: "12.0 MB"            // tamaño real del .exe
};

const STR = {
  es: {
    nav_feat: "Características", nav_vers: "Versiones", nav_priv: "Privacidad", nav_inst: "Instalación",
    nav_code: "Gratis", nav_dl: "Descargar",
    hero_badge: "AUTOMATIZACIÓN DE ARCHIVOS", hero_title: "PON ORDEN AL CAOS.",
    hero_sub: "Organiza tus archivos en segundos. Sin complicaciones.",
    hero_news: "¡NUEVA ACTUALIZACIÓN: 1.1.0!",
    hero_dl: "DESCARGAR SORTY PARA WINDOWS", hero_ver: "Versión",
    hero_wait: "La descarga aún no está publicada. Vuelve pronto o mira el código fuente.",
    hero_all: "Ver todas las versiones",
    vis_title: "Míralo en acción",
    vis_cap1: "Ventana principal: selecciona tu carpeta y ve las estadísticas.",
    vis_cap2: "Pantalla Organizar: categorías, simulación y vista previa real.",
    feat_title: "Lo que hace SORTY",
    f1t: "Elige tu carpeta", f1d: "Selecciona cualquier carpeta (o arrástrala a la ventana) y SORTY la analiza al instante.",
    f2t: "Clasifica solo", f2d: "Imágenes, documentos, videos, audio, comprimidos, ejecutables y otros. Sin tocar subcarpetas, salvo que actives el modo recursivo.",
    f3t: "Previsualiza antes", f3d: "La simulación muestra cada movimiento sin tocar el disco. Confirmas solo si te convence.",
    f4t: "Sin sobrescrituras", f4d: "Si un nombre ya existe, se crea “archivo (1).ext”. Nada se borra ni se reemplaza jamás.",
    f5t: "Deshazlo si quieres", f5d: "Cada operación queda registrada y puedes devolver los archivos a su lugar desde el Historial.",
    f6t: "En tu idioma", f6d: "Español, English y Português, con cambio al instante desde Ajustes.",
    priv_title: "Tus archivos no salen de tu equipo",
    priv_d: "SORTY trabaja 100 % en local: no tiene cuentas, no usa red y no envía nada a ningún servidor (verificado: el programa no contiene código de red). Tus ajustes e historial se guardan solo en tu equipo, en la carpeta de datos del usuario. Nunca se elimina ni se sube ningún archivo.",
    inst_title: "Requisitos e instalación",
    inst_1: "Pulsa DESCARGAR SORTY PARA WINDOWS y guarda el archivo Sorty.exe (≈ 12.0 MB).",
    inst_2: "Haz doble clic para abrirlo. No requiere instalación ni tener Python.",
    inst_3: "Si Windows SmartScreen muestra una advertencia (normal en apps independientes): pulsa “Más información” → “Ejecutar de todas formas”.",
    vers_title: "Versiones",
    v110_badge: "ACTUAL",
    v110_title: "Versión 1.1.0 — Cambios Visuales",
    v110_f1: "Temas de colores + crea el tuyo",
    v110_f2: "Selector por categoría y carpetas renombrables",
    v110_f3: "Bienvenida animada y cofre renovado",
    v110_f4: "Texto configurable y paleta aleatoria",
    v110_dl: "Descargar 1.1.0",
    v100_title: "Versión 1.0.0 — Primera versión",
    v100_d: "Organización automática con simulación, confirmación, deshacer e historial.",
    v100_dl: "Descargar 1.0.0",
    v100_page: "Ver release",
    inst_req: "Requisitos:", inst_reqd: "Windows 10 u 11 de 64 bits. No necesita permisos de administrador.",
    code_title: "Gratis para usar",
    code_d: "SORTY es gratuito para uso personal. El programa se distribuye como ejecutable; el código fuente no es público. Todos los derechos reservados © Nxttomorrow.",
    foot_by: "Creador"
  },
  en: {
    nav_feat: "Features", nav_vers: "Releases", nav_priv: "Privacy", nav_inst: "Install",
    nav_code: "Free", nav_dl: "Download",
    hero_badge: "FILE AUTOMATION", hero_title: "TAME THE CHAOS.",
    hero_sub: "Organize your files in seconds. No hassle.",
    hero_news: "NEW UPDATE: 1.1.0!",
    hero_dl: "DOWNLOAD SORTY FOR WINDOWS", hero_ver: "Version",
    hero_wait: "The download is not published yet. Come back soon or check the source code.",
    hero_all: "See all releases",
    vis_title: "See it in action",
    vis_cap1: "Main window: pick your folder and see the stats.",
    vis_cap2: "Organize screen: categories, simulation and real preview.",
    feat_title: "What SORTY does",
    f1t: "Pick your folder", f1d: "Select any folder (or drag it onto the window) and SORTY analyzes it instantly.",
    f2t: "Sorts on its own", f2d: "Images, documents, videos, audio, archives, executables and others. Subfolders untouched unless you enable recursive mode.",
    f3t: "Preview first", f3d: "Simulation shows every move without touching the disk. Confirm only if you like it.",
    f4t: "Never overwrites", f4d: "If a name exists, “file (1).ext” is created. Nothing is ever deleted or replaced.",
    f5t: "Undo anytime", f5d: "Every operation is logged and you can restore files from History.",
    f6t: "In your language", f6d: "Español, English and Português, switchable instantly from Settings.",
    priv_title: "Your files never leave your computer",
    priv_d: "SORTY works 100 % locally: no accounts, no network, nothing sent anywhere (verified: the program contains no networking code). Settings and history live only on your machine, in the user data folder. No file is ever deleted or uploaded.",
    inst_title: "Requirements & install",
    inst_1: "Press DOWNLOAD SORTY FOR WINDOWS and save Sorty.exe (≈ 12.0 MB).",
    inst_2: "Double-click to open. No install, no Python needed.",
    inst_3: "If Windows SmartScreen warns you (normal for indie apps): click “More info” → “Run anyway”.",
    vers_title: "Releases",
    v110_badge: "LATEST",
    v110_title: "Version 1.1.0 — Visual Changes",
    v110_f1: "Color themes + make your own",
    v110_f2: "Per-category picker and renamable folders",
    v110_f3: "Animated welcome and renewed chest",
    v110_f4: "Configurable text and random palette",
    v110_dl: "Download 1.1.0",
    v100_title: "Version 1.0.0 — First release",
    v100_d: "Automatic organizing with simulation, confirmation, undo and history.",
    v100_dl: "Download 1.0.0",
    v100_page: "View release",
    inst_req: "Requirements:", inst_reqd: "64-bit Windows 10 or 11. No admin rights needed.",
    code_title: "Free to use",
    code_d: "SORTY is free for personal use. It is distributed as an executable; the source code is not public. All rights reserved © Nxttomorrow.",
    foot_by: "Creator"
  }
};

let lang = (navigator.language || "es").startsWith("en") ? "en" : "es";

function releasesBase() {
  if (!CONFIG.OWNER || !CONFIG.REPO || !CONFIG.EXE_NAME) return null;
  return `https://github.com/${CONFIG.OWNER}/${CONFIG.REPO}/releases`;
}

function aplicarIdioma() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (STR[lang][k] !== undefined) el.textContent = STR[lang][k];
  });
  document.querySelectorAll(".lang button").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === lang));
}

function configurarDescarga() {
  const btn = document.getElementById("btn-descargar");
  const nav = document.getElementById("nav-descargar");
  const wait = document.getElementById("dl-wait");
  const all = document.getElementById("link-releases");
  const btn110 = document.getElementById("btn-descargar-110");
  const btn100 = document.getElementById("btn-descargar-100");
  const page100 = document.getElementById("link-release-100");
  document.getElementById("dl-version").textContent = CONFIG.VERSION;
  document.getElementById("dl-size").textContent = CONFIG.SIZE_MB;
  document.getElementById("foot-version").textContent = CONFIG.VERSION;
  const base = releasesBase();
  if (base) {
    // Enlace estable a la última versión publicada (mismo nombre de archivo).
    btn.href = `${base}/latest/download/${CONFIG.EXE_NAME}`;
    btn.removeAttribute("aria-disabled");
    // El botón superior descarga directamente el mismo archivo.
    nav.href = btn.href;
    wait.hidden = true;
    all.href = `${base}`;
    // Tarjeta 1.1.0: misma última versión; tarjeta 1.0.0: enlaces fijos al tag.
    btn110.href = btn.href;
    btn100.href = `${base}/download/v1.0.0/${CONFIG.EXE_NAME}`;
    page100.href = `${base}/tag/v1.0.0`;
    // La descarga la inicia el navegador; ningún mensaje previo de éxito.
  } else {
    // Sin configurar: estado informativo en lugar de un botón roto.
    btn.removeAttribute("href");
    btn.setAttribute("aria-disabled", "true");
    nav.href = "#descargar";
    btn110.removeAttribute("href");
    btn110.setAttribute("aria-disabled", "true");
    btn100.removeAttribute("href");
    page100.removeAttribute("href");
    wait.hidden = false;
    all.removeAttribute("href");
  }
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => { lang = b.dataset.lang; aplicarIdioma(); }));
document.getElementById("burger").addEventListener("click", e => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
document.getElementById("foot-year").textContent = new Date().getFullYear();

aplicarIdioma();
configurarDescarga();
