import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { collabMaterial1, collabMaterial2, collabMaterial3, trigger1, trigger2, trigger3 } from "../Collab/CollabMat";
// import { Raycaster } from "../Experience/Raycaster";
// import { createMaterialFromJSON } from "./CreateMaterial";

export const processJSON1 = (sofa : THREE.Object3D , className : string , ktx2loader : any ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial1(sofa , data , ktx2loader ) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                trigger1(thumbnailSelected) ; 
            })
        })
        trigger1("Pink_Fabric")
    })
}

export const processJSON2 = (sofa : THREE.Object3D , className : string , ktx2Loader : KTX2Loader  ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial2(sofa , data , ktx2Loader ) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                trigger2(thumbnailSelected) ; 
            })
        })
        trigger2("Laminate")
    })
}


export const processJSON3 = (sofa : THREE.Object3D , className : string , ktx2loader : KTX2Loader  ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial3(sofa , data , ktx2loader ) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                trigger3(thumbnailSelected) ; 
            })
        })
        trigger3("Tailored")
    })

}