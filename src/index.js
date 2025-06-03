import "./styles.css";



requestAnimationFrame(() => {
    document.body.classList.add("active");
    document.body.classList.remove("fade-in");
});

function entryClassCb(entries, observer) {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}

const observerOptions = {
    threshold: 0.5,
}

const observer = new IntersectionObserver(entryClassCb, observerOptions);

document.querySelectorAll('.card-fade').forEach(ele => {
    observer.observe(ele);
});
