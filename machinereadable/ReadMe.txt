The current folder “machinereadable” consist of the following:
1. Input - folder with the input data used in the workspaces
  a. PPSR metadata model: 1_Project_Metadata_Model.xlsx
  b. Inventory of 512 environmental citizen science projects: Inventory of environmental citizen science projects_anonymised.xlsx
2. Output - folder where the output data from the workspaces are stored
3. Output_ORIGINAL - folder with the output data already generated
  a. Generated JSON Schema for PPSR model: PPSR_JSONSchema.js
  b. Generated JSON Data for 512 projects of CS Inventory, based on the PPSR model: CSInventrory_JSON.js
4. Workspaces - folder with workspaces for Pentaho Spoon DI
  a. Workspace for generating JSON Schema from PPSR model: 1_PPSR_Transformation_XLS2JSONSchema.ktr
  b. Workspace for generating JSON Data for CS Inventory: 2_PPSR_CSInventory_JSON.ktr
5. A presentation "Pentaho_PPSR-JSON_20201119" that illustrates the approach to create a JSON Schema and an accordingly encoded data set. This presentation explains how to use the input (from folder 1.) to create the output (as included in folder 3.) by executing the workspaces (from folder 4.) using the open source tool Pentaho Spoon Data Integration.

The used Pentaho Spoon Data Integration can be downloaded from the following link:
https://sourceforge.net/projects/pentaho/files/Pentaho%208.2/client-tools/pdi-ce-8.2.0.0-342.zip/download?use_mirror=netcologne&download=&failedmirror=jztkft.dl.sourceforge.net