---
title: "Improving the generalizability of protein-ligand binding predictions with AI-Bind"

date: 2023-04-08
date_end: 2023-04-08
event: 'Nature Comunications'
show_post_time: false
excerpt: 'State-of-the-art machine learning models in drug discovery fail to reliably predict the binding properties of poorly annotated proteins and small molecules. Here, the authors present AI-Bind, a machine learning pipeline to improve generalizability and interpretability of binding predictions.'
links:
- icon: newspaper
  icon_pack: fas
  name: publication
  url: https://doi.org/10.1038/s41467-023-37572-z
event_url: https://doi.org/10.1038/s41467-023-37572-z
author: "Deisy Morselli Gysi"
draft: false
# layout options: single, single-sidebar
layout: single
categories:
- paper
- bioinformatics
- protein-bind
- AI
---

# Abstract
Identifying novel drug-target interactions is a critical and rate-limiting step in drug discovery. While deep learning models have been proposed to accelerate the identification process, here we show that state-of-the-art models fail to generalize to novel (i.e., never-before-seen) structures. We unveil the mechanisms responsible for this shortcoming, demonstrating how models rely on shortcuts that leverage the topology of the protein-ligand bipartite network, rather than learning the node features. Here we introduce AI-Bind, a pipeline that combines network-based sampling strategies with unsupervised pre-training to improve binding predictions for novel proteins and ligands. We validate AI-Bind predictions via docking simulations and comparison with recent experimental evidence, and step up the process of interpreting machine learning prediction of protein-ligand binding by identifying potential active binding sites on the amino acid sequence. AI-Bind is a high-throughput approach to identify drug-target combinations with the potential of becoming a powerful tool in drug discovery.

# Citation

Chatterjee A, Walters R, Shafi Z, Ahmed OS, Sebek M, Gysi D, Yu R, Eliassi-Rad T, Barabási AL, Menichetti G. Improving the generalizability of protein-ligand binding predictions with AI-Bind. Nature Communications. 2023 Apr 8;14(1):1989.
https://doi.org/10.1038/s41467-023-37572-z