import { Injectable } from '@angular/core';
import { FileSystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraResultType, CamereSource, Photo } from '@capacitor/camera'

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() { }
  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto ({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
    });
  } 
}