/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { KubeEnvironment } from '@azure/arm-appservice';
import { ICreateChildImplContext, IResourceGroupWizardContext } from 'vscode-azureextensionui';

export interface IKubeEnvironmentContext extends IResourceGroupWizardContext, ICreateChildImplContext {

    // created when the wizard is done executing
    kubeEnvironment?: KubeEnvironment;
}