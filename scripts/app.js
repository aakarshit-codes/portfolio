const loadSection = async (id, path) => {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
};

loadSection("hero", "./sections/hero.html");