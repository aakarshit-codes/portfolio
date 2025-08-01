// Load and inject modular HTML sections dynamically
// Each section is lazy-loaded and added by ID


const loadSection = async (id, path) => {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
};

loadSection("hero", "./sections/hero.html");
loadSection("about", "./sections/about.html");
loadSection("projects", "./sections/projects.html");