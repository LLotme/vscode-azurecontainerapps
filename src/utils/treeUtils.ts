/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Uri } from 'vscode';
import { TreeItemIconPath } from 'vscode-azureextensionui';
import { ext } from '../extensionVariables';

export namespace treeUtils {
    export function getIconPath(iconName: string): TreeItemIconPath {
        return Uri.joinPath(getResourcesUri(), `${iconName}.svg`);
    }

    function getResourcesUri(): Uri {
        return Uri.joinPath(ext.context.extensionUri, 'resources')
    }
}