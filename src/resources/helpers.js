import * as THREE from 'three'
import flatten from 'lodash-es/flatten'
import { SVGLoader as loader } from './SVGLoader'
import './styles.css'

const doubleSide = THREE.DoubleSide
const deg = THREE.Math.degToRad
const colors = ['#21242d', '#ea5158', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2']
const svgs = ['1e237a38b44f500b9271bc14147af6b0.svg', 'dcc0c62270cdfc6fc4b0ad23b847e008.svg', 'aead2a522ee8ae931e6632ae988b4a86.svg', '3cd0c63a1656c52883f6eeed986c369c.svg','c8a54d9c298b7c45e24f6ed5e6a3c275.svg','77a20a9c21228c477a86ab4da47b667a.svg']
  .map(name => `https://codrops-svg.surge.sh/${name}`)
  .map(
    url =>
      new Promise(resolve =>
        new loader().load(url, shapes =>
          resolve(flatten(shapes.map((group, index) => group.toShapes(true).map(shape => ({ shape, color: group.color, index })))))
        )
      )
  )

export { svgs, colors, deg, doubleSide }
