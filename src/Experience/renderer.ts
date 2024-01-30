import * as THREE from 'three' ; 

const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
    return renderer;
}

export { createRenderer } ; 