//
//  NativeManager.m
//  ReactNativeApp
//
//  Created by Keshav on 02/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NativeManager.h"
#import "AppDelegate.h"
#import "ReactNativeApp-Swift.h"

@interface NativeManager ()

@end

@implementation NativeManager
RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

#pragma mark RCT_EXPORT

RCT_EXPORT_METHOD(showNativeView) {
  dispatch_async(dispatch_get_main_queue(), ^{
    NativeViewController *viewController = [[NativeViewController alloc] init];
    UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:viewController];
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [delegate.rootViewController presentViewController:navController animated:YES completion:nil];
  });
}

#pragma mark private-methods

void hideMediaPicker() {
  AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [delegate.rootViewController dismissViewControllerAnimated:YES completion:nil];
}

@end
