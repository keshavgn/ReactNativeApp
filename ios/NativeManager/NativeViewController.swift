//
//  NativeViewController.swift
//  ReactNativeApp
//
//  Created by Keshav on 02/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc class NativeViewController: UIViewController {
  
  override func viewDidLoad() {
    super.viewDidLoad()
    title = "Native view"
    view.backgroundColor = #colorLiteral(red: 1, green: 1, blue: 1, alpha: 1)
    
    self.navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(dismissView))
  }
  
  @objc func dismissView() {
    let delegate = UIApplication.shared.delegate as? AppDelegate
    delegate?.rootViewController.dismiss(animated: true, completion: nil)
  }
  
}
