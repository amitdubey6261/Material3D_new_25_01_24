import * as THREE from 'three' ; 

function createMaterialFromJSON(jsonData:any) {
    console.log(jsonData);
    const diffuseMap = new THREE.TextureLoader().load(jsonData.diffuseMap);
    const glossMap = new THREE.TextureLoader().load(jsonData.glossMap);
    const normalMap = new THREE.TextureLoader().load(jsonData.normalMap);

    diffuseMap.wrapS = THREE.RepeatWrapping;
    diffuseMap.wrapT = THREE.RepeatWrapping;
    glossMap.wrapS = THREE.RepeatWrapping;
    glossMap.wrapT = THREE.RepeatWrapping;
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    //@ts-ignore
    diffuseMap.repeat.set(...jsonData.diffuseMapTiling);
    //@ts-ignore
    glossMap.repeat.set(...jsonData.glossMapTiling);
    //@ts-ignore
    normalMap.repeat.set(...jsonData.normalMapTiling);

    const material = new THREE.MeshPhysicalMaterial({
        metalness: jsonData.metalness,
        roughness: 1 - jsonData.sheenGloss,
        opacity: jsonData.opacity,
        transparent: true,
        map: diffuseMap,
        roughnessMap: glossMap,
        normalMap: normalMap,
        side: jsonData.twoSidedLighting ? THREE.DoubleSide : THREE.FrontSide,
        alphaTest: jsonData.alphaTest,
        depthWrite: jsonData.depthWrite,
        depthTest: jsonData.depthTest,
        color: new THREE.Color(...jsonData.diffuse),
        emissive: new THREE.Color(...jsonData.emissive),
        emissiveIntensity: jsonData.emissiveIntensity,
        aoMap: null,
        aoMapIntensity: 1,
    });

    material.clearcoat = jsonData.clearcoat || 0;
    material.clearcoatRoughness = jsonData.clearcoatRoughness || 0;
    material.reflectivity = jsonData.reflectivity || 0.5;

    return material;
}

export { createMaterialFromJSON } ; 