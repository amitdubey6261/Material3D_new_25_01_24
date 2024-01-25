import { createMaterialFromJSON } from "../../DynamicMaterials/CreateMaterial";
import { ydoc } from "../Collab";

const ymap1 = ydoc.getMap('Mat-Map1');
const ymap2 = ydoc.getMap('Mat-Map2');
const ymap3 = ydoc.getMap('Mat-Map3');

const collabMaterial1 = (sofa: THREE.Object3D, data: any) => {
    ymap1.set("material_1", "");

    ymap1.observe(() => {
        const str = ymap1.get('material_1') as string ; 
        const dmat = createMaterialFromJSON(data[str]);
        //@ts-ignore
        sofa.scene.traverse((elem) => {
            //@ts-ignore
            if (elem.type == "Mesh") {
                //@ts-ignore
                elem.material = dmat.clone();
            }
        })

    })
}

const collabMaterial2 = (sofa: THREE.Object3D, data: any) => {
    ymap2.set("material_2", "");

    ymap2.observe(() => {
        const str = ymap2.get('material_2') as string ; 
        const dmat = createMaterialFromJSON(data[str]);
        //@ts-ignore
        sofa.scene.traverse((elem) => {
            //@ts-ignore
            if (elem.type == "Mesh") {
                //@ts-ignore
                elem.material = dmat.clone();
            }
        })

    })
}

const collabMaterial3 = (sofa: THREE.Object3D, data: any) => {
    ymap3.set("material_3", "");

    ymap3.observe(() => {
        const str = ymap3.get('material_3') as string ; 
        const dmat = createMaterialFromJSON(data[str]);
        //@ts-ignore
        sofa.scene.traverse((elem) => {
            //@ts-ignore
            if (elem.type == "Mesh") {
                //@ts-ignore
                elem.material = dmat.clone();
            }
        })

    })
}

const trigger1 = (thumbnailSelected: string) => {
    ymap1.set("material_1", thumbnailSelected);
}
const trigger2 = (thumbnailSelected: string) => {
    ymap2.set("material_2", thumbnailSelected);
}
const trigger3 = (thumbnailSelected: string) => {
    ymap3.set("material_3", thumbnailSelected);
}

export { collabMaterial1 , collabMaterial2 , collabMaterial3 , trigger1 , trigger2 , trigger3 }; 