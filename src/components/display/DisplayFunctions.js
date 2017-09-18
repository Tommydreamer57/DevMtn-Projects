import React, { Component } from 'react';
import url from '../../../server/index';

export const createPicture = navItem => axios.post(url, navItem).then(response => response.data)

export const readPicture = navItem => axios.get(url + id).then(response => response.data)

export const pupdatePicture = (id, navItem) => axios.put(url + id).then(response => response.data)

export const deletePicture = navItem => (id, navItem) => axios.delete(url + id).then(response => response.data)

