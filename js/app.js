import { templates } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("template-select");
  const taskInput = document.getElementById("task");
  const branchInput = document.getElementById("branch");
  const linkInput = document.getElementById("link");
  const notesInput = document.getElementById("notes");
  const techInput = document.getElementById("tech");
  const generateBtn = document.getElementById("generate-btn");
  const copyBtn = document.getElementById("copy-btn");
  const resultArea = document.getElementById("result");
  const copyMsg = document.getElementById("copy-message");
  const taskError = document.getElementById("task-error");
  const themeToggle = document.getElementById("theme-toggle");

  initTheme();
  loadTemplates();

  themeToggle.addEventListener("click", toggleTheme);

  function initTheme() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    updateToggleLabel(isDark);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme") && !e.matches) {
        applyTheme("light");
      }
    });
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleLabel(theme === "dark");
  }

  function updateToggleLabel(isDark) {
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Alternar para tema claro" : "Alternar para tema escuro"
    );
  }

  generateBtn.addEventListener("click", generatePrompt);
  copyBtn.addEventListener("click", copyPrompt);

  function loadTemplates() {
    Object.entries(templates).forEach(([key, tpl]) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = `${tpl.label} — ${tpl.category}`;
      select.appendChild(option);
    });
  }

  function generatePrompt() {
    const task = taskInput.value.trim();

    if (!task) {
      taskError.style.display = "block";
      taskInput.focus();
      return;
    }
    taskError.style.display = "none";

    const key = select.value;
    const tpl = templates[key];

    if (!tpl) {
      resultArea.value = "";
      return;
    }

    const result = tpl.content
      .replace(/{{TASK}}/g, task)
      .replace(/{{BRANCH}}/g, branchInput.value.trim() || "(não informado)")
      .replace(/{{LINK}}/g, linkInput.value.trim() || "(não informado)")
      .replace(/{{NOTES}}/g, notesInput.value.trim() || "(nenhuma)")
      .replace(/{{TECH}}/g, techInput.value.trim() || "(não informada)");

    resultArea.value = result;
    copyBtn.disabled = false;
    resultArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function copyPrompt() {
    const text = resultArea.value;

    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      showCopyMessage("Prompt copiado com sucesso!", false);
    }).catch(() => {
      resultArea.select();
      const ok = document.execCommand("copy");
      showCopyMessage(ok ? "Prompt copiado!" : "Não foi possível copiar. Selecione e copie manualmente.", !ok);
    });
  }

  function showCopyMessage(msg, isError) {
    copyMsg.textContent = msg;
    copyMsg.className = "copy-message " + (isError ? "error" : "success");
    copyMsg.style.display = "block";
    setTimeout(() => { copyMsg.style.display = "none"; }, 3000);
  }
});
