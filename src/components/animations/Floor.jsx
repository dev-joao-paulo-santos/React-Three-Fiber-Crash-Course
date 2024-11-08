import React from 'react'

export function Floor () {
  return (
   <mesh position={[0, -.6, 0]}>
    <boxGeometry args={[25, .1, 25]} />
    <meshStandardMaterial color={'lime'} roughness={.3} metalness={.8}/>
   </mesh>
  )
}
