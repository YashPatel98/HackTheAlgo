import React, { Component } from "react";

/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";*/
import Dtable from "./Dtable";
export default class Lcs extends Component {
    render() {
        return (
            <div >
               
                <h1>Longest Common Subsequence</h1>
                <p style={{ fontSize: "20px" }}> <b><em>LCS Problem Statement:</em>  Given two sequences,find the length of longest subsequence
                 present in both of them.<br/>A subsequence is a sequence that appears in the same relative order, 
                 but not necessarily contiguous. <br/>
                 For example, &#8220;abc&#8221;, &#8220;abg&#8221;, &#8220;bdf&#8221;, &#8220;aeg&#8221;, 
                 &#8216;&#8221;acefg&#8221;, .. etc are subsequences of &#8220;abcdefg&#8221;. 
</b> </p>
                <Dtable />
            </div >
        );
    }

}