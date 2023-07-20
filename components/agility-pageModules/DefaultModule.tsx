import React from 'react';
import { Module } from '@agility/nextjs';

interface IDefaultModule {
  module: any;
}

const DefaultModule: Module<IDefaultModule> = ({module}) => {
  const {fields, properties} = module;
  return (
  <div>HELLO DEVELOPER! Component - {properties.definitionName} not defined</div>
  )
}

export default DefaultModule;
