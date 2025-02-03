"use client"

import { useState } from "react";

import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css"
import Inline from "yet-another-react-lightbox/plugins/inline";

const LightBox = (params) => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
  
    const toggleOpen = (state) => () => setOpen(state);
  
    const updateIndex = ({ index: current }) => setIndex(current);

    return (
        <div className="rounded-xl overflow-hidden">
            <Lightbox
                index={index}
                slides= {params.slides}
                plugins={[Inline]}
                on={{
                view: updateIndex,
                click: toggleOpen(true),
                }}
                carousel={{
                padding: 0,
                spacing: 0,
                imageFit: "cover",
                }}
                inline={{
                style: {
                    width: "100%",
                    height: "100%",
                    aspectRatio: "3.5 / 2"
                }
                }}
            />

            <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides= {params.slides}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            />
        </div>
    )
}

export default LightBox;