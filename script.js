```javascript
// ============================================
// ADV RESEARCH
// Main application controller
// ============================================


// ============================================
// PAGE NAVIGATION
// ============================================

function showPage(pageId) {

    // Hide every page
    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Show requested page
    const page =
        document.getElementById(pageId);

    if (page) {

        page.classList.add("active");

    }


    // Refresh saved research when opening
    // the research laboratory
    if (pageId === "research") {

        loadResearch();

    }


    // Refresh featured research on home
    if (pageId === "home") {

        loadFeaturedResearch();

    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================
// MATHEMATICS TOOLS
// ============================================

function openMathTool(tool) {

    if (tool === "calculus") {

        openToolPage(
            "Calculus",
            "Limits, derivatives, integrals and series.",
            `
                <h3>Calculus Tools</h3>

                <div class="tool-box">

                    <h4>Limits</h4>

                    <p>
                        Study limits, continuity and
                        asymptotic behaviour.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Derivatives</h4>

                    <p>
                        Explore derivatives and rates
                        of change.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Integrals</h4>

                    <p>
                        Work with definite, indefinite
                        and improper integrals.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Series</h4>

                    <p>
                        Study sequences, power series
                        and convergence.
                    </p>

                </div>
            `
        );

        return;
    }


    if (tool === "real-analysis") {

        openToolPage(
            "Real Analysis",
            "Rigorous mathematical analysis.",
            `
                <h3>Real Analysis Tools</h3>

                <div class="tool-box">

                    <h4>Sequences</h4>

                    <p>
                        Convergence, boundedness and
                        subsequences.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Functions</h4>

                    <p>
                        Continuity, differentiability
                        and properties of functions.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Series</h4>

                    <p>
                        Numerical series and convergence
                        criteria.
                    </p>

                </div>
            `
        );

        return;
    }


    if (tool === "complex-analysis") {

        openToolPage(
            "Complex Analysis",
            "Complex functions, residues and contour integration.",
            `
                <h3>Complex Analysis Tools</h3>

                <div class="tool-box">

                    <h4>Complex Functions</h4>

                    <p>
                        Holomorphic functions,
                        analytic functions and
                        Cauchy-Riemann equations.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Contour Integrals</h4>

                    <p>
                        Study complex integration
                        along curves and contours.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Residues</h4>

                    <p>
                        Laurent series, isolated
                        singularities and residue calculus.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Research Workspace</h4>

                    <p>
                        Write and save your own
                        complex-analysis research.
                    </p>

                    <button
                        onclick="openResearchWithField('Complex Analysis')">

                        Open Research Workspace

                    </button>

                </div>
            `
        );

        return;
    }


    if (tool === "linear-algebra") {

        openToolPage(
            "Linear Algebra",
            "Vector spaces, matrices, eigenvalues and operators.",
            `
                <h3>Linear Algebra Tools</h3>

                <div class="tool-box">

                    <h4>Vector Spaces</h4>

                    <p>
                        Explore vector spaces,
                        subspaces and bases.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Matrices</h4>

                    <p>
                        Matrix operations,
                        determinants and inverses.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Eigenvalues</h4>

                    <p>
                        Eigenvalues, eigenvectors
                        and diagonalization.
                    </p>

                </div>
            `
        );

    }

}


// ============================================
// PHYSICS TOOLS
// ============================================

function openPhysicsTool(tool) {

    if (tool === "classical-mechanics") {

        openToolPage(
            "Classical Mechanics",
            "Newtonian, Lagrangian and Hamiltonian mechanics.",
            `
                <h3>Classical Mechanics Tools</h3>

                <div class="tool-box">

                    <h4>Newtonian Mechanics</h4>

                    <p>
                        Forces, momentum and Newton's laws.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Lagrangian Mechanics</h4>

                    <p>
                        Generalized coordinates,
                        Lagrangian and Euler-Lagrange equations.
                    </p>

                    <button
                        onclick="openResearchWithField('Lagrangian Mechanics')">

                        Research Lagrangian Mechanics

                    </button>

                </div>

                <div class="tool-box">

                    <h4>Hamiltonian Mechanics</h4>

                    <p>
                        Hamiltonian dynamics,
                        canonical coordinates and phase space.
                    </p>

                </div>
            `
        );

        return;
    }


    if (tool === "quantum-mechanics") {

        openToolPage(
            "Quantum Mechanics",
            "Schrödinger equation, operators and Hilbert spaces.",
            `
                <h3>Quantum Mechanics Tools</h3>

                <div class="tool-box">

                    <h4>Schrödinger Equation</h4>

                    <p>
                        Study time-dependent and
                        time-independent quantum dynamics.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Operators</h4>

                    <p>
                        Position, momentum, Hamiltonian
                        and observable operators.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Hilbert Spaces</h4>

                    <p>
                        Quantum states, inner products
                        and vector spaces.
                    </p>

                </div>
            `
        );

        return;
    }


    if (tool === "relativity") {

        openToolPage(
            "Relativity",
            "Special relativity, spacetime and relativistic dynamics.",
            `
                <h3>Relativity Tools</h3>

                <div class="tool-box">

                    <h4>Spacetime</h4>

                    <p>
                        Events, intervals and Minkowski spacetime.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Lorentz Transformations</h4>

                    <p>
                        Transform coordinates between
                        inertial reference frames.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Relativistic Dynamics</h4>

                    <p>
                        Relativistic momentum,
                        energy and mass-energy relations.
                    </p>

                </div>
            `
        );

        return;
    }


    if (tool === "mathematical-physics") {

        openToolPage(
            "Mathematical Physics",
            "Mathematics used to formulate physical theories.",
            `
                <h3>Mathematical Physics Tools</h3>

                <div class="tool-box">

                    <h4>Differential Equations</h4>

                    <p>
                        ODEs and PDEs appearing
                        in physical systems.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Fourier Analysis</h4>

                    <p>
                        Fourier series, transforms
                        and wave analysis.
                    </p>

                </div>

                <div class="tool-box">

                    <h4>Mathematical Structures</h4>

                    <p>
                        Vector spaces, operators,
                        tensors and mathematical models.
                    </p>

                </div>
            `
        );

    }

}


// ============================================
// TOOL PAGE
// ============================================

function openToolPage(
    title,
    description,
    content
) {

    const existing =
        document.getElementById(
            "dynamicToolPage"
        );


    if (existing) {

        existing.remove();

    }


    const section =
        document.createElement("section");


    section.id =
        "dynamicToolPage";


    section.className =
        "page active";


    section.innerHTML = `

        <button
            class="back-button"
            onclick="closeToolPage()">

            ← Back

        </button>

        <h1>
            ${title}
        </h1>

        <p class="intro">
            ${description}
        </p>

        <div class="dynamic-tools">

            ${content}

        </div>

    `;


    document
        .querySelector("main")
        .appendChild(section);


    // Hide normal pages
    document
        .querySelectorAll(
            "main > .page:not(#dynamicToolPage)"
        )
        .forEach(function(page) {

            page.classList.remove(
                "active"
            );

        });


    if (window.MathJax) {

        MathJax.typesetPromise([
            section
        ]);

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================
// CLOSE TOOL PAGE
// ============================================

function closeToolPage() {

    const page =
        document.getElementById(
            "dynamicToolPage"
        );


    if (page) {

        page.remove();

    }


    showPage("home");

}


// ============================================
// RESEARCH WORKSPACE
// ============================================

function openResearchWithField(field) {

    showPage("research");


    const select =
        document.getElementById(
            "researchField"
        );


    if (select) {

        select.value =
            field;

    }

}


// ============================================
// SAVE RESEARCH
// ============================================

function saveResearch() {

    const title =
        document
            .getElementById(
                "researchTitle"
            )
            .value
            .trim();


    const field =
        document
            .getElementById(
                "researchField"
            )
            .value;


    const content =
        document
            .getElementById(
                "researchContent"
            )
            .value;


    if (!title) {

        alert(
            "Please enter a research title."
        );

        return;

    }


    const savedResearch =
        JSON.parse(
            localStorage.getItem(
                "advResearch"
            ) || "[]"
        );


    savedResearch.push({

        title: title,

        field: field,

        content: content,

        author:
            "Yassine Bechir Dallel",

        date:
            new Date().toLocaleDateString()

    });


    localStorage.setItem(
        "advResearch",
        JSON.stringify(
            savedResearch
        )
    );


    alert(
        "Research saved successfully."
    );


    loadResearch();

    clearEditor();

}


// ============================================
// LOAD RESEARCH
// ============================================

function loadResearch() {

    const container =
        document.getElementById(
            "researchList"
        );


    if (!container) {

        return;

    }


    const savedResearch =
        JSON.parse(
            localStorage.getItem(
                "advResearch"
            ) || "[]"
        );


    container.innerHTML = "";


    if (
        savedResearch.length === 0
    ) {

        container.innerHTML = `

            <div class="research-item">

                <p>
                    No saved research yet.
                </p>

            </div>

        `;

        return;

    }


    savedResearch
        .slice()
        .reverse()
        .forEach(function(item) {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "research-item";


            div.innerHTML = `

                <h3>
                    ${escapeHTML(
                        item.title
                    )}
                </h3>

                <p>
                    <strong>
                        Field:
                    </strong>

                    ${escapeHTML(
                        item.field
                    )}
                </p>

                <p>
                    <strong>
                        Author:
                    </strong>

                    ${escapeHTML(
                        item.author
                    )}
                </p>

                <p>
                    <strong>
                        Date:
                    </strong>

                    ${escapeHTML(
                        item.date
                    )}
                </p>

                <div class="saved-content">

                    ${escapeHTML(
                        item.content
                    )}

                </div>

            `;


            container.appendChild(div);

        });

}


// ============================================
// FEATURED RESEARCH
// ============================================

function loadFeaturedResearch() {

    const container =
        document.getElementById(
            "featuredResearch"
        );


    if (!container) {

        return;

    }


    const savedResearch =
        JSON.parse(
            localStorage.getItem(
                "advResearch"
            ) || "[]"
        );


    if (
        savedResearch.length === 0
    ) {

        container.innerHTML = `

            <div class="research-item">

                <p>
                    Your saved research
                    will appear here.
                </p>

            </div>

        `;

        return;

    }


    const latest =
        savedResearch[
            savedResearch.length - 1
        ];


    container.innerHTML = `

        <div class="research-item">

            <h3>
                ${escapeHTML(
                    latest.title
                )}
            </h3>

            <p>
                ${escapeHTML(
                    latest.field
                )}
            </p>

            <p>
                ${escapeHTML(
                    latest.date
                )}
            </p>

        </div>

    `;

}


// ============================================
// CLEAR EDITOR
// ============================================

function clearEditor() {

    const title =
        document.getElementById(
            "researchTitle"
        );


    const content =
        document.getElementById(
            "researchContent"
        );


    if (title) {

        title.value = "";

    }


    if (content) {

        content.value = "";

    }

}


// ============================================
// SECURITY HELPER
// ============================================

function escapeHTML(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// ============================================
// CONNECT THE EXISTING TOPIC BUTTONS
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        // ============================
        // MATHEMATICS
        // ============================

        const mathTopics =
            document.querySelectorAll(
                "#mathematics .topic"
            );


        if (mathTopics[0]) {

            mathTopics[0].onclick =
                function() {

                    openMathTool(
                        "calculus"
                    );

                };

        }


        if (mathTopics[1]) {

            mathTopics[1].onclick =
                function() {

                    openMathTool(
                        "real-analysis"
                    );

                };

        }


        if (mathTopics[2]) {

            mathTopics[2].onclick =
                function() {

                    openMathTool(
                        "complex-analysis"
                    );

                };

        }


        if (mathTopics[3]) {

            mathTopics[3].onclick =
                function() {

                    openMathTool(
                        "linear-algebra"
                    );

                };



        // ============================
        // PHYSICS
        // ============================

        const physicsTopics =
            document.querySelectorAll(
                "#physics .topic"
            );


        if (physicsTopics[0]) {

            physicsTopics[0].onclick =
                function() {

                    openPhysicsTool(
                        "classical-mechanics"
                    );

                };

        }


        if (physicsTopics[1]) {

            physicsTopics[1].onclick =
                function() {

                    openPhysicsTool(
                        "quantum-mechanics"
                    );

                };

        }


        if (physicsTopics[2]) {

            physicsTopics[2].onclick =
                function() {

                    openPhysicsTool(
                        "relativity"
                    );

                };

        }


        if (physicsTopics[3]) {

            physicsTopics[3].onclick =
                function() {

                    openPhysicsTool(
                        "mathematical-physics"
                    );

                };

        }


        // Load initial data

        loadResearch();

        loadFeaturedResearch();

    }
);
```
