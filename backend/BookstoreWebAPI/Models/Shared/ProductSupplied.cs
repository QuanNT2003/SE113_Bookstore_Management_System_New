﻿using Newtonsoft.Json;

namespace BookstoreWebAPI.Models.Shared
{
    public class ProductsSupplied
    {
        [JsonProperty("productId")]
        public string ProductId { get; set; }

        [JsonProperty("sku")]
        public string Sku { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("purchasePrice")]
        public int PurchasePrice { get; set; }

        [JsonProperty("currentStock")]
        public int CurrentStock { get; set; }

        [JsonProperty("featureImageUrl")]
        public string FeatureImageUrl { get; set; }
    }
}
