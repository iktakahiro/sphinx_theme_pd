import "../sass/pd.sass"
import * as $ from "jquery";

const iconSize = "md-30"

// mapping HTML class / icon name
const admonitions = {
    "note": "message",
    "hint": "lightbulb_outline",
    "tip": "lightbulb_outline",
    "caution": "priority_high",
    "attention": "priority_high",
    "warning": "warning",
    "important": "announcement",
    "error": "error",
    "danger": "error",
    "admonition-todo": "bookmark",
}

// mapping HTML class / prefix for Python domains
const domainClasses = {
    "function": "function",
    "class": "class",
    "method": "method",
    "staticmethod": "static",
    "classmethod": "method",
}

$(() => {
    // Add material icon tag to a.headerlink
    $("a.headerlink").html("").prepend(`<i class="material-icons">link</i>`)

    // Set HTML class for admonitions
    $.each(admonitions, (cls, icon) => {
        let container = $(`div.${cls} > p.admonition-title`);
        container.prepend(`<i class="material-icons ${iconSize}">${icon}</i>`)
    })

    // Set HTML class for Python domain
    $.each(domainClasses, (cls, prefix) => {
        let container_dt = $(`dl.${cls} > dt`)
        let container_em = $(`dl.${cls} > dt > em.property`)

        if (!container_em[0]) {
            container_dt.prepend(`<em class="property">${prefix}</em>`)
        }
        container_dt.prepend(`<i class="material-icons ${iconSize}">code</i>`)
    })
})
