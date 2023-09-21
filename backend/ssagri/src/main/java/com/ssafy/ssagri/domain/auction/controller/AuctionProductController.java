package com.ssafy.ssagri.domain.auction.controller;

import com.querydsl.core.Tuple;
import com.ssafy.ssagri.domain.auction.service.AuctionProductService;
import com.ssafy.ssagri.dto.auction.AuctionProductAll;
import com.ssafy.ssagri.dto.auction.AuctionProductCreate;

import com.ssafy.ssagri.entity.auction.AuctionProduct;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/auction-product")
@RequiredArgsConstructor
public class AuctionProductController {

    private final AuctionProductService auctionProductService;

    @GetMapping(value = "/all-list")
    public List<AuctionProductAll> allList(){
        System.out.println("들어왔니");
        return auctionProductService.getAuctionProducts();

    }


    @PostMapping(value = "/auction/regist")
    public void allList(@RequestBody AuctionProductCreate auctionProductCreate){
        auctionProductService.setAuctionProduct(auctionProductCreate);
        // response 나중에 처리
    }

}