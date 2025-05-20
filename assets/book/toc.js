// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="background.html"><strong aria-hidden="true">2.</strong> Background</a></li><li class="chapter-item expanded "><a href="types/index.html"><strong aria-hidden="true">3.</strong> Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="types/Problem.html"><strong aria-hidden="true">3.1.</strong> Problem</a></li><li class="chapter-item expanded "><a href="types/Solution.html"><strong aria-hidden="true">3.2.</strong> Solution</a></li><li class="chapter-item expanded "><a href="types/Neighbourhood.html"><strong aria-hidden="true">3.3.</strong> Neighbourhood</a></li><li class="chapter-item expanded "><a href="types/Move.html"><strong aria-hidden="true">3.4.</strong> Move</a></li></ol></li><li class="chapter-item expanded "><a href="operations/index.html"><strong aria-hidden="true">4.</strong> Operations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="operations/empty_solution.html"><strong aria-hidden="true">4.1.</strong> empty_solution</a></li><li class="chapter-item expanded "><a href="operations/heuristic_solution.html"><strong aria-hidden="true">4.2.</strong> heuristic_solution</a></li><li class="chapter-item expanded "><a href="operations/random_solution.html"><strong aria-hidden="true">4.3.</strong> random_solution</a></li><li class="chapter-item expanded "><a href="operations/copy_solution.html"><strong aria-hidden="true">4.4.</strong> copy_solution</a></li><li class="chapter-item expanded "><a href="operations/lower_bound.html"><strong aria-hidden="true">4.5.</strong> lower_bound</a></li><li class="chapter-item expanded "><a href="operations/objective_value.html"><strong aria-hidden="true">4.6.</strong> objective_value</a></li><li class="chapter-item expanded "><a href="operations/construction_neighbourhood.html"><strong aria-hidden="true">4.7.</strong> construction_neighbourhood</a></li><li class="chapter-item expanded "><a href="operations/destruction_neighbourhood.html"><strong aria-hidden="true">4.8.</strong> destruction_neighbourhood</a></li><li class="chapter-item expanded "><a href="operations/local_neighbourhood.html"><strong aria-hidden="true">4.9.</strong> local_neighbourhood</a></li><li class="chapter-item expanded "><a href="operations/moves.html"><strong aria-hidden="true">4.10.</strong> moves</a></li><li class="chapter-item expanded "><a href="operations/random_move.html"><strong aria-hidden="true">4.11.</strong> random_move</a></li><li class="chapter-item expanded "><a href="operations/random_moves_without_replacement.html"><strong aria-hidden="true">4.12.</strong> random_moves_without_replacement</a></li><li class="chapter-item expanded "><a href="operations/apply_move.html"><strong aria-hidden="true">4.13.</strong> apply_move</a></li><li class="chapter-item expanded "><a href="operations/invert_move.html"><strong aria-hidden="true">4.14.</strong> invert_move</a></li><li class="chapter-item expanded "><a href="operations/lower_bound_increment.html"><strong aria-hidden="true">4.15.</strong> lower_bound_increment</a></li><li class="chapter-item expanded "><a href="operations/objective_value_increment.html"><strong aria-hidden="true">4.16.</strong> objective_value_increment</a></li></ol></li><li class="chapter-item expanded "><a href="glossary.html"><strong aria-hidden="true">5.</strong> Glossary</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
