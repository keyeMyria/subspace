// @flow

import * as Three from "three"
import type { Body } from "@subspace/core"

const { innerWidth: width, innerHeight: height } = window

const shipGeometry = new Three.BoxGeometry(1, 1, 1)
const shipMaterial = new Three.MeshBasicMaterial({ color: 0x0033ff })

export interface Interface {
  mount(Element): void;
  render({ [string]: Body }): void;
}

export function make(): Interface {
  const scene = new Three.Scene()
  const camera = new Three.OrthographicCamera(
    width / -50,
    width / 50,
    height / 50,
    height / -50,
    -500,
    1000,
  )
  const renderer = new Three.WebGLRenderer({
    antialias: true,
  })
  const meshes = {}

  renderer.setSize(width, height)

  const render = (bodies: { [string]: Body }) => {
    for (const id in bodies) {
      const { angle, position: [x, y] } = bodies[id]

      let mesh = meshes[id]

      if (!mesh) {
        mesh = meshes[id] = new Three.Mesh(shipGeometry, shipMaterial)
        scene.add(mesh)
      }

      mesh.position.set(x, y, 0)
      mesh.rotation.z = angle
    }

    renderer.render(scene, camera)
  }

  const mount = (el: Element) => el.appendChild(renderer.domElement)

  return {
    mount,
    render,
  }
}
